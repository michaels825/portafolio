import p5 from 'p5';
const BackgroundMainProcessing = (app: p5) => {

    // Source: Real-Time Fluid Dynamics for Games by Jos Stam - http://www.intpowertechcorp.com/GDC03.pdf


    var rkey = 0.011;
    var gkey = 200;
    var bkey = 10;
    var zkey = 0.0001;

    var ckey = 0.0001;


    var N = 70;
    var size;
    var u: number[] = [];
    var v: number[] = [];
    var u_prev: number[] = [];
    var v_prev: number[] = [];
    var dens: number[] = [];
    var dens_prev: number[] = [];
    var source = 10;
    var diff = zkey;
    var visc = ckey;
    var dt = 0.01;
    var turb: number[][] = [];
    var next_turb: number[][] = [];
    var rpos = bkey;
    var rstep = gkey;
    var noise_amount = rkey;




    document.addEventListener("keydown", (keyE) => {
        const key = keyE.key;
        if (key === "1") {
            rkey += .001;
        } else if (key === "2") {
            rkey -= .001;
        } else if (key === "3") {
            gkey++;
        } else if (key === "4") {
            gkey--;
        } else if (key === "5") {
            bkey++;
        } else if (key === "6") {
            bkey--;
        } else if (key === "7") {
            zkey += .001;
        } else if (key === "8") {
            zkey -= .001;
        } else if (key === "9") {
            ckey += .0001;
        } else if (key === "0") {
            ckey -= .0001;
        }
        console.log(rkey, gkey, bkey, zkey, ckey)
    })

    var pressDefault = true;

    const IX = (i = 0, j = 0) => {
        return i + (N + 2) * j;
    }

    const PX = (x = 0, y = 0) => {
        return (x + fondo.width * y) * 4;
    }
    let fondo: p5.Image;

    const setup = () => {
        //app.createCanvas(500, 500);
        app.background(8, 13, 74);
        app.stroke(0, 255, 0);
        initSim();
        //   app.frameRate(20)

        fondo = app.loadImage("/img/assests/fondo.png")
        fondo.resize(app.width, app.height)

    }

    const initSim = () => {
        size = (N + 2) * (N + 2);
        for (var i = 0; i < size; i++) {
            u[i] = 0//app.random(0, 10) / 10;
            v[i] = 0//app.random(0, 10) / 10;
            dens[i] = 0//app.random(0, 10) / 10;
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

        app.background(8, 13, 74)
        dens_prev = dens.slice();
        u_prev = u.slice();
        v_prev = v.slice();

        app.image(fondo, 0, 0);

        add_density();
        add_velocity();
        vel_step();
        add_noise();
        dens_step();
        // drawVelocity();
        drawDensity();

        if (mouseAfterX !== app.mouseX && mouseAfterY !== app.mouseY) {
            mouseAfterX = app.mouseX;
            mouseAfterY = app.mouseY;
            pressDefault = true;
            desidadNumber.cantidad++;
        } else {
            pressDefault = false;
        }

    }


    var suma = 1;
    const add_density = () => {
        /*
                if ((desidadNumber.cantidad % 5 === 0 && suma === 1) || (suma === -1)) {
                    suma *= -1;
                }
        
                /*
                if ((suma === 1 && desidadNumber.cantidad > 200) || (suma === -1 && desidadNumber.cantidad > 100)) {
                    desidadNumber.cantidad = 0;
                    suma *= -1;
                }
                */

        if ((desidadNumber.cantidad > 200)) {
            desidadNumber.cantidad = 0;
            suma *= -1;
        }

        if (pressDefault /* || app.mouseIsPressed*/) {

            let staticRWidthMouse = (N / app.width) * app.mouseX;
            let staticRWidthMouseXInt = app.int(staticRWidthMouse);
            let staticRWidthMouseY = (N / app.height) * app.mouseY;
            let staticRWidthMouseYInt = app.int(staticRWidthMouseY);

            let sourceResult = suma * source;
            let sourceResult2 = sourceResult / 2;


            dens[IX(staticRWidthMouseXInt, staticRWidthMouseYInt)] += sourceResult;
            dens[IX(app.int(staticRWidthMouse - 1), staticRWidthMouseYInt)] += sourceResult2;
            dens[IX(app.int(staticRWidthMouse + 1), staticRWidthMouseYInt)] += sourceResult2;
            dens[IX(staticRWidthMouseXInt, app.int(staticRWidthMouseY - 1))] += sourceResult2;
            dens[IX(staticRWidthMouseXInt, app.int(staticRWidthMouseY + 1))] += sourceResult2;
        }
    }

    const add_velocity = () => {
        var i;
        if (pressDefault /*|| app.mouseIsPressed*/) {
            i = IX(app.int((N / app.width) * app.mouseX), app.int((N / app.height) * app.mouseY));
            var xv = (N / app.width) * (app.mouseX - app.pmouseX);
            var yv = (N / app.height) * (app.mouseY - app.pmouseY);
            u[i] += xv * (2 / (app.abs(xv) + 1)) * 15;
            v[i] += yv * (2 / (app.abs(yv) + 1)) * 15;
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
                var hg = app.abs(dens[IX(x - 1, y)] - dens[IX(x + 1, y)]);
                var vg = app.abs(dens[IX(x, y - 1)] - dens[IX(x, y + 1)]);
                var un = (turb[i][0] * (1.0 - rpos) + next_turb[i][0] * rpos) * hg;
                var vn = (turb[i][1] * (1.0 - rpos) + next_turb[i][1] * rpos) * vg;
                u[i] += un * (2 / (app.abs(un) + 1)) * noise_amount;
                v[i] += vn * (2 / (app.abs(vn) + 1)) * noise_amount;
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
                i0 = app.int(x);
                i1 = i0 + 1;
                if (y < 0.5) y = 0.5;
                if (y > N + 0.5) y = N + 0.5;
                j0 = app.int(y);
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

        let static_dx = (N / fondo.width)
        let static_dy = (N / fondo.height)


        fondo.loadPixels();
        for (var x = 0; x < fondo.width; x++) {
            for (var y = 0; y < fondo.height; y++) {
                dx = static_dx * x;
                ddx = dx - app.int(dx);
                dy = static_dy * y;
                ddy = dy - app.int(dy);
                // df = (dens[IX(app.floor(dx), app.floor(dy))] * (1.0 - ddx) + dens[IX(app.ceil(dx), app.floor(dy))] * ddx) * (1.0 - ddy) + (dens[IX(app.floor(dx), app.ceil(dy))] * (1.0 - ddx) + dens[IX(app.ceil(dx), app.ceil(dy))] * ddx) * ddy;
                df = (
                    dens[IX(app.floor(dx), app.floor(dy))]
                    * (1.0 - ddx)
                    + dens[IX(app.ceil(dx), app.floor(dy))]
                    * ddx)
                    * (1.0 - ddy)
                    + (dens[IX(app.floor(dx), app.ceil(dy))]
                        * (1.0 - ddx)
                        + dens[IX(app.ceil(dx), app.ceil(dy))]
                        * ddx)
                    * ddy;
                di = app.int(df * 255);
                if (di < 0) di = 0;
                if (di > 255) di = 255;


                //app.pixels[PX(x, y)] = app.pixels[PX(x, y)] * (1 - df) + di * df;
                fondo.pixels[PX(x, y)] = di
                fondo.pixels[(PX(x, y)) - 4] = di;
                // app.pixels[PX(x, y) + bkey] = di;


                //app.pixels[PX(x, y) + 3] = 255;
            }
        }

        fondo.updatePixels();


    }

    const drawVelocity = () => {


        var sx = app.width / N;
        var sy = app.height / N;
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
                app.line(app.int((x - 0.5) * sx), app.int((y - 0.5) * sy), app.int((x - 0.5) * sx + u[i] * 50), app.int((y - 0.5) * sy + v[i] * 50));
            }
        }
    }

    //Basic implementation of the polar form of the Box-Muller transform
    //Returns an array containing two gaussian distributed random values with mean 0 and a standard deviation of 1
    const polarBoxMullerTransform = () => {

        var x1, x2, w, y1, y2;

        //  console.log("Bien")
        do {
            x1 = 2.0 * Math.random() - 1.0;
            x2 = 2.0 * Math.random() - 1.0;
            w = x1 * x1 + x2 * x2;
        } while (w >= 1.0);
        //  console.log("Todo esta bien")


        w = Math.sqrt((-2.0 * Math.log(w)) / w);
        y1 = x1 * w;
        y2 = x2 * w;
        return [y1, y2];
    }

    var loop = true;

    const mousePressed = () => {
        /*
        if (loop) {
            app.noLoop()
        }else{
            app.loop();
        }
     
        */
        loop = !loop

    }

    return {
        setup,
        draw,
        mousePressed
    }
}

export default BackgroundMainProcessing;