import { Shape, Stage, Ticker } from "createjs-module";

const BackgroundCreateJs = () => {


    let width = 500;
    let height = 500;

    const canvas = document.createElement("canvas");

    const stage = new Stage(canvas);


    var pmouseX = stage.mouseX;
    var pmouseY = stage.mouseY;

    var N = 50;
    var size;
    var u: number[] = [];
    var v: number[] = [];
    var u_prev: number[] = [];
    var v_prev: number[] = [];
    var dens: number[] = [];
    var dens_prev: number[] = [];
    var source = 5;
    var diff = 0.0001;
    var visc = 0.0001;
    var dt = 0.01;
    var turb: number[][] = [];
    var next_turb: number[][] = [];
    var rpos = 10;
    var rstep = .2;
    var noise_amount = 0.03;

    var pressDefault = true;

    const IX = (i = 0, j = 0) => {
        return i + (N + 2) * j;
    }

    const PX = (x = 0, y = 0) => {
        return (x + width * y) * 4;
    }

    const setup = () => {
        //app.createCanvas(500, 500);
        // app.background(8, 13, 74);
        //app.stroke(0, 255, 0);
        initSim();
        //   app.frameRate(20)

    }

    const initSim = () => {
        size = (N + 2) * (N + 2);
        for (var i = 0; i < size; i++) {
            u[i] = 0.0;
            v[i] = 0.0;
            dens[i] = 0.0;
            turb[i] = polarBoxMullerTransform();
            next_turb[i] = polarBoxMullerTransform();
        }
    }

    let mouseAfterX = 0, mouseAfterY = 0;

    let desidadNumber = {
        estado: "principal",
        cantidad: 0
    } as {
        estado: "principal" | "secundario",
        cantidad: number
    };

    const draw = () => {

        //   app.background(254, 55, 77);
        // app.background(8, 13, 74);
        //    app.background(79, 86, 161)
        dens_prev = dens.slice();
        u_prev = u.slice();
        v_prev = v.slice();

        add_density();
        add_velocity();
        vel_step();
        add_noise();
        dens_step();
        // drawVelocity();
        drawDensity();

        /*

        /////////////////////////////
        if (mouseAfterX !== stage.mouseX && mouseAfterY !== stage.mouseY) {
            mouseAfterX = stage.mouseX;
            mouseAfterY = stage.mouseY;
            pressDefault = true;
            desidadNumber.cantidad++;
        } else {
            pressDefault = false;
        }

        */


        /*
    
        app.text("u: '" + u.length + "' ; " + "v: '" + v.length + "' ; ", 100, 50)
        app.text("u_prev: '" + u_prev.length + "' ; " + "v_prev: '" + v_prev.length + "' ; ", 100, 100)
        app.text("dens: '" + dens.length + "' ; " + "dens_prev: '" + dens_prev.length + "' ; ", 100, 150)
        app.text("turb: '" + turb.length + "' ; " + "next_turb: '" + next_turb.length + "' ; ", 100, 200)
        
        app.text("MouseX: " + stage.mouseX, 100, 50);
        */
        // app.text("MouseY: " + desidadNumber.cantidad, 100, 100);

    }


    var suma = 1;
    const add_density = () => {
        if (desidadNumber.cantidad > 200) {
            desidadNumber.cantidad = 0;
            suma *= -1;
        }
        if (pressDefault /* || stage.mouseIsPressed*/) {
            dens[IX(parseInt("" + ((N / width) * stage.mouseX)), parseInt("" + ((N / height) * stage.mouseY)))] += (suma * source);
            dens[IX(parseInt("" + ((N / width) * stage.mouseX - 1)), parseInt("" + ((N / height) * stage.mouseY)))] += (suma * source) / 2;
            dens[IX(parseInt("" + ((N / width) * stage.mouseX + 1)), parseInt("" + ((N / height) * stage.mouseY)))] += (suma * source) / 2;
            dens[IX(parseInt("" + ((N / width) * stage.mouseX)), parseInt("" + ((N / height) * stage.mouseY - 1)))] += (suma * source) / 2;
            dens[IX(parseInt("" + ((N / width) * stage.mouseX)), parseInt("" + ((N / height) * stage.mouseY + 1)))] += (suma * source) / 2;
        }
    }

    const add_velocity = () => {
        var i;
        if (pressDefault /*|| stage.mouseIsPressed*/) {
            i = IX(parseInt("" + ((N / width) * stage.mouseX), parseInt("" + ((N / height) * stage.mouseY))));
            var xv = (N / width) * (stage.mouseX - pmouseX);
            var yv = (N / height) * (stage.mouseY - pmouseY);
            u[i] += xv * (2 / (Math.abs(xv) + 1)) * 15;
            v[i] += yv * (2 / (Math.abs(yv) + 1)) * 15;
        }
    }

    const add_noise = () => {

        var refill = false;
        rpos += rstep;
        if (rpos >= 1) {
            refill = true;
            rpos = 0;
        }
        for (var x = 1; x <= N; x++) {
            for (var y = 1; y <= N; y++) {
                var i = IX(x, y);
                if (refill) {
                    turb[i] = next_turb[i];
                    next_turb[i] = polarBoxMullerTransform();
                }
                var hg = Math.abs(dens[IX(x - 1, y)] - dens[IX(x + 1, y)]);
                var vg = Math.abs(dens[IX(x, y - 1)] - dens[IX(x, y + 1)]);

                var un = (turb[i][0] * (1.0 - rpos) + next_turb[i][0] * rpos) * hg;
                var vn = (turb[i][1] * (1.0 - rpos) + next_turb[i][1] * rpos) * vg;
                u[i] += un * (2 / (Math.abs(un) + 1)) * noise_amount;
                v[i] += vn * (2 / (Math.abs(vn) + 1)) * noise_amount;
            }
        }
    }

    const diffuse = (b: number, x: number[], x0: number[], diff0: number) => {
        var a = dt * diff0 * N * N;
        for (var k = 0; k < 20; k++) {
            for (var i = 1; i <= N; i++) {
                for (var j = 1; j <= N; j++) {
                    x[IX(i, j)] = (x0[IX(i, j)] + a * (x[IX(i - 1, j)] + x[IX(i + 1, j)] + x[IX(i, j - 1)] + x[IX(i, j + 1)])) / (1 + 4 * a);
                }
            }
            set_bnd(b, x);
        }
    }

    const advect = (b: number, d: number[], d0: number[], u0: number[], v0: number[]) => {

        var i0, j0, i1, j1;
        var x, y, s0, t0, s1, t1, dt0;
        dt0 = dt * N;
        for (var i = 1; i <= N; i++) {
            for (var j = 1; j <= N; j++) {
                x = i - dt0 * u0[IX(i, j)];
                y = j - dt0 * v0[IX(i, j)];
                if (x < 0.5) x = 0.5;
                if (x > N + 0.5) x = N + 0.5;
                i0 = parseInt("" + (x));
                i1 = i0 + 1;
                if (y < 0.5) y = 0.5;
                if (y > N + 0.5) y = N + 0.5;
                j0 = parseInt("" + (y));
                j1 = j0 + 1;
                s1 = x - i0;
                s0 = 1 - s1;
                t1 = y - j0;
                t0 = 1 - t1;
                d[IX(i, j)] = s0 * (t0 * d0[IX(i0, j0)] + t1 * d0[IX(i0, j1)]) + s1 * (t0 * d0[IX(i1, j0)] + t1 * d0[IX(i1, j1)]);
            }
        }
        set_bnd(b, d);
    }

    const dens_step = () => {
        //SWAP ( x0, x );
        diffuse(0, dens_prev, dens, diff);
        //SWAP ( x0, x );
        advect(0, dens, dens_prev, u, v);
    }

    const vel_step = () => {
        //SWAP( u0, u );
        diffuse(1, u_prev, u, visc);
        //SWAP( v0, v );
        diffuse(2, v_prev, v, visc);
        project(u_prev, v_prev, u, v);
        //SWAP( u0, u );
        //SWAP( v0, v );
        advect(1, u, u_prev, u_prev, v_prev);
        advect(2, v, v_prev, u_prev, v_prev);
        project(u, v, u_prev, v_prev);
    }

    const project = (u0: number[], v0: number[], p: number[], div: number[]) => {
        var h = 1.0 / N;
        for (var i = 1; i <= N; i++) {
            for (var j = 1; j <= N; j++) {
                div[IX(i, j)] = -0.5 * h * (u0[IX(i + 1, j)] - u0[IX(i - 1, j)] + v0[IX(i, j + 1)] - v0[IX(i, j - 1)]);
                p[IX(i, j)] = 0;
            }
        }
        set_bnd(0, div);
        set_bnd(0, p);
        for (var k = 0; k < 20; k++) {
            for (i = 1; i <= N; i++) {
                for (j = 1; j <= N; j++) {
                    p[IX(i, j)] = (div[IX(i, j)] + p[IX(i - 1, j)] + p[IX(i + 1, j)] + p[IX(i, j - 1)] + p[IX(i, j + 1)]) * (1 / 4);
                }
            }
            set_bnd(0, p);
        }
        for (i = 1; i <= N; i++) {
            for (j = 1; j <= N; j++) {
                u0[IX(i, j)] -= 0.5 * (p[IX(i + 1, j)] - p[IX(i - 1, j)]) / h;
                v0[IX(i, j)] -= 0.5 * (p[IX(i, j + 1)] - p[IX(i, j - 1)]) / h;
            }
        }
        set_bnd(1, u0);
        set_bnd(2, v0);
    }

    const set_bnd = (b: number, x: number[]) => {
        for (var i = 1; i <= N; i++) {
            x[IX(0, i)] = b == 1 ? -x[IX(1, i)] : x[IX(1, i)];
            x[IX(N + 1, i)] = b == 1 ? -x[IX(N, i)] : x[IX(N, i)];
            x[IX(i, 0)] = b == 2 ? -x[IX(i, 1)] : x[IX(i, 1)];
            x[IX(i, N + 1)] = b == 2 ? -x[IX(i, N)] : x[IX(i, N)];
        }
        x[IX(0, 0)] = 0.5 * (x[IX(1, 0)] + x[IX(0, 1)]);
        x[IX(0, N + 1)] = 0.5 * (x[IX(1, N + 1)] + x[IX(0, N)]);
        x[IX(N + 1, 0)] = 0.5 * (x[IX(N, 0)] + x[IX(N + 1, 1)]);
        x[IX(N + 1, N + 1)] = 0.5 * (x[IX(N, N + 1)] + x[IX(N + 1, N)]);
    }


    const drawDensity = () => {

        var dx, dy, ddx, ddy;
        var df, di;

        //app.background(254, 55, 77)

        /*

        app.loadPixels();
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                dx = (N / width) * x;
                ddx = dx - parseInt("" + (dx);
                dy = (N / height) * y;
                ddy = dy - parseInt("" + (dy);
                df = (dens[IX(Math.floor(dx), Math.floor(dy))] * (1.0 - ddx) + dens[IX(Math.ceil(dx), Math.floor(dy))] * ddx) * (1.0 - ddy) + (dens[IX(Math.floor(dx), Math.ceil(dy))] * (1.0 - ddx) + dens[IX(Math.ceil(dx), Math.ceil(dy))] * ddx) * ddy;


                di = parseInt("" + (df * 255);
                if (di < 0) di = 0;
                if (di > 255) di = 255;


                //app.pixels[PX(x, y)] = app.pixels[PX(x, y)] * (1 - df) + di * df;
                app.pixels[PX(x, y) + 2] = di;
                //  app.pixels[PX(x, y) + 1] = di;

                app.pixels[PX(x, y) + 3] = 255;
                
            }
        }

        app.updatePixels();
        */

        b.graphics.clear();
        for (let x = 0; x < width / 10; x++) {
            for (let y = 0; y < height / 10; y++) {

                dx = (N / width) * x;
                ddx = dx - parseInt("" + (dx));
                dy = (N / height) * y;
                ddy = dy - parseInt("" + (dy));
                df = (dens[IX(Math.floor(dx), Math.floor(dy))] * (1.0 - ddx) + dens[IX(Math.ceil(dx), Math.floor(dy))] * ddx) * (1.0 - ddy) + (dens[IX(Math.floor(dx), Math.ceil(dy))] * (1.0 - ddx) + dens[IX(Math.ceil(dx), Math.ceil(dy))] * ddx) * ddy;


                di = parseInt("" + (df * 255));
                if (di < 0) di = 0;
                if (di > 255) di = 255;


                b.graphics.beginFill("hsl(" + di + ", 50%, 50%)").rect(x * 10, y * 10, 10, 10);
            }
        }


    }

    const drawVelocity = () => {


        var sx = width / N;
        var sy = height / N;
        for (var x = 1; x <= N; x++) {
            for (var y = 1; y <= N; y++) {
                var i = IX(x, y);
                /*var b = 0;
                var r = int( u[i] * v[i] * 255);
                if (r < 0) {
                  b = -r;
                  r = 0;
                }
                if (r > 255) r = 255;
                if (b > 255) b = 255;
                stroke(r, 0, b);*/
                //   app.line(parseInt("" + ((x - 0.5) * sx), parseInt("" + ((y - 0.5) * sy), parseInt("" + ((x - 0.5) * sx + u[i] * 50), parseInt("" + ((y - 0.5) * sy + v[i] * 50));
            }
        }


    }


    const polarBoxMullerTransform = () => {

        var x1, x2, w, y1, y2;
        do {
            x1 = 2.0 * Math.random() - 1.0;
            x2 = 2.0 * Math.random() - 1.0;
            w = x1 * x1 + x2 * x2;
        } while (w >= 1.0);

        w = Math.sqrt((-2.0 * Math.log(w)) / w);
        y1 = x1 * w;
        y2 = x2 * w;
        return [y1, y2];
    }

    initSim();

   // stage.enableDOMEvents(false);

    setInterval(() => {
        //    app.background(79, 86, 161)
        dens_prev = dens.slice();

        u_prev = u.slice();
        v_prev = v.slice();

        add_density();
        add_velocity();
        vel_step();
        add_noise();
        dens_step();
        // drawVelocity();
        console.log("Dibujando")
        drawDensity();


        /////////////////////////////
        if (mouseAfterX !== stage.mouseX && mouseAfterY !== stage.mouseY) {
            mouseAfterX = stage.mouseX;
            mouseAfterY = stage.mouseY;
            pressDefault = true;
            desidadNumber.cantidad++;
        } else {
            pressDefault = false;
        }


        stage.update();

    }, 50)





    let b = new Shape();




    stage.addChild(b);


    return canvas;
}

export default BackgroundCreateJs;