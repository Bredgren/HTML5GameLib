
module HTML5GameLib {
    /**
     * A class to represent a 2D vector. Immutable.
     */
    export class Vector {
        public static ZERO_VECTOR = new Vector(0, 0);
        private _x: number;
        private _y: number;

        /** 
         * @param x The x-coordinate
         * @param y The y-coordinate
         */
        constructor(x: number, y: number) {
            this._x = x;
            this._y = y;
        }

        /** @return This Vector's x-coordinate */
        x(): number { return this._x }

        /** @return This Vector's y-coordinate */
        y(): number { return this._y }

        /**
         * Returns a new Vector equal to this + other.
         * @param other The Vector to add to this one
         * @return The resulting Vector
         */
        plus(other: Vector): Vector { return new Vector(this.x() + other.x(), this.y() + other.y()) }

        /**
         * Returns a new Vector equal to this - other.
         * @param other The Vector to subtract from this one
         * @return The resulting Vector
         */
        minus(other: Vector): Vector { return new Vector(this.x() - other.x(), this.y() - other.y()) }

        /**
         * Returns a new Vector with equal to (this.x * amount, this.y * amount).
         * @param amount The amount to scale this Vector by
         * @return The resulting Vector
         */
        scale(amount: number): Vector { return new Vector(this.x() * amount, this.y() * amount) }

        /**
         * Returns a new Vector with equal to (this.x * amount.x, this.y * amount.y).
         * @param amount The amount to scale this Vector by
         * @return The resulting Vector
         */
        scaleVector(amount: Vector): Vector { return new Vector(this.x() * amount.x(), this.y() * amount.y()) }

        /**
         * Returns the length (or magnitude) of this Vector.
         * @return The length of this Vector
         */
        length(): number { return Math.sqrt(this.x() * this.x() + this.y() * this.y()) }

        /**
         * Returns a new Vector in thes same direction as this one but with length = 1.
         * @return The resulting Vector
         */
        normalized(): Vector {
            var l = this.length();
            var l = (l === 0) ? Infinity : l;
            return new Vector(this.x() / l, this.y() / l);
        }

        /**
         * @return A string representation of this Vector
         */
        toString(): string { return "(" + this.x() + ", " + this.y() + ")" }
    }
}