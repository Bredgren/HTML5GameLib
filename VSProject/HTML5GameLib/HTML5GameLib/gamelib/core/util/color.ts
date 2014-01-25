
module HTML5GameLib {
    /**
     * A class to represent a Color. Immutable.
     */
    export class Color {
        public static WHITE = new Color(255, 255, 255);
        public static BLACK = new Color(0, 0, 0);
        public static TRANSPARENT = new Color(0, 0, 0, 0);

        private _r: number;
        private _g: number;
        private _b: number;
        private _a: number;

        /** 
         * All components will be clamped bewteen 0 and 255 inclusive.
         *
         * @param r The red component
         * @param g The green component
         * @param b The blue component
         * @param a The alpha component, 0 = transparent, 255 = opaque,
         * default = 255
         */
        constructor(r: number, g: number, b: number, a:number = 255) {
            this._r = this._clamp(r);
            this._g = this._clamp(g);
            this._b = this._clamp(b);
            this._a = this._clamp(a);
        }

        private _clamp(value: number): number {
            value = value > 255 ? 255 : value;
            value = value < 0 ? 0 : value;
            return value;
        }

        /** @return The red compenent */
        r(): number { return this._r }
        /** @return The green compenent */
        g(): number { return this._g }
        /** @return The blue compenent */
        b(): number { return this._b }
        /** @return The alpha compenent */
        a(): number { return this._a }

        /**
         *
         * @param
         * @param alpha Whether to include the alpha in the computation. If
         * false then the resulting alpha will be unchanged.
         */
        scale(amount: number, alpha: boolean = true): Color {
            var a = alpha ? this.a() * amount : this.a();
            return new Color(amount * this.r(), amount * this.g(), amount * this.b(), a);
        }

        plus(other: Color): Color {
            return new Color(c1.r() + c2.r(), c1.g() + c2.g(), c1.b() + c2.b(), c1.a() + c2.a());
        }

        minus(other: Color): Color {
            return new Color(c1.r() - c2.r(), c1.g() - c2.g(), c1.b() - c2.b(), c1.a() - c2.a());
        }

        times(other: Color): Color {
            return new Color(c1.r() * c2.r(), c1.g() * c2.g(), c1.b() * c2.b(), c1.a() * c2.a());
        }

        /**
         * @return A string representation of this Color. The format can
         * directly be used as a style.
         */
        toString(): string { return "rgba(" + this.r() + ", " + this.g() + ", " + this.b() + ", " + this.a() + ")" }
    }
} 