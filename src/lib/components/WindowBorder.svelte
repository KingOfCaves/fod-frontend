<div class="window__border">
    <svg
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        overflow="visible"
    >
        <defs>
            <pattern
                id="top-fill"
                width="1"
                height="5"
                patternUnits="userSpaceOnUse"
            >
                <rect
                    width="2"
                    height="2"
                    class="fill-light"
                />
                <rect
                    y="2"
                    width="2"
                    height="2"
                    class="fill-medium"
                />
                <rect
                    y="4"
                    width="2"
                    height="1"
                    class="fill-dark"
                />
            </pattern>
            <pattern
                id="left-fill"
                width="5"
                height="1"
                patternUnits="userSpaceOnUse"
            >
                <rect
                    width="2"
                    height="2"
                    class="fill-light"
                />
                <rect
                    x="4"
                    width="1"
                    height="2"
                    class="fill-dark"
                />
                <rect
                    x="2"
                    width="2"
                    height="2"
                    class="fill-medium"
                />
            </pattern>
            <pattern
                id="bottom-fill"
                width="1"
                height="5"
                patternUnits="userSpaceOnUse"
            >
                <rect
                    y="3"
                    width="2"
                    height="2"
                    class="fill-dark"
                />
                <rect
                    y="1"
                    width="2"
                    height="2"
                    class="fill-medium"
                />
                <rect
                    width="2"
                    height="1"
                    class="fill-light"
                />
            </pattern>
            <pattern
                id="right-fill"
                width="5"
                height="1"
                patternUnits="userSpaceOnUse"
            >
                <rect
                    x="1"
                    width="2"
                    height="2"
                    class="fill-medium"
                />
                <rect
                    x="3"
                    width="2"
                    height="2"
                    class="fill-dark"
                />
                <rect
                    width="1"
                    height="2"
                    class="fill-light"
                />
            </pattern>

            <svg id="upper-middle">
                <rect
                    width="100%"
                    height="5"
                    fill="url(#top-fill)"
                />
            </svg>
            <svg id="left-middle">
                <rect
                    width="5"
                    height="100%"
                    fill="url(#left-fill)"
                />
            </svg>
            <svg
                id="lower-middle"
                y="100%"
            >
                <rect
                    height="5"
                    width="100%"
                    fill="url(#bottom-fill)"
                />
            </svg>
            <svg
                id="right-middle"
                x="100%"
            >
                <rect
                    width="5"
                    height="100%"
                    fill="url(#right-fill)"
                />
            </svg>

            <svg
                id="upper-left"
                height="50"
                width="100%"
                viewBox="0 0 50 50"
                preserveAspectRatio="xMinYMin"
            >
                <g>
                    <path
                        d="m4 4v18h1v-17h17v-1z"
                        class="fill-dark"
                    />
                    <path
                        d="m2 2v20h2v-18h18v-2z"
                        class="fill-medium"
                    />
                    <path
                        d="m0 0v22h2v-20h20v-2z"
                        class="fill-light"
                    />
                </g>

                <g class="chisel">
                    <rect
                        x="22"
                        width="1"
                        height="5"
                        class="fill-dark"
                    />
                    <rect
                        y="22"
                        width="5"
                        height="1"
                        class="fill-dark"
                    />
                    <rect
                        y="23"
                        width="5"
                        height="1"
                        class="fill-light"
                    />
                    <rect
                        x="23"
                        width="1"
                        height="5"
                        class="fill-light"
                    />
                </g>
            </svg>
            <svg
                id="lower-left"
                height="50"
                width="100%"
                viewBox="0 0 50 50"
                preserveAspectRatio="xMinYMax"
            >
                <g>
                    <path
                        d="m4 28v18h1v-18zm-2 20v1h-1v1h21v-2z"
                        class="fill-dark"
                    />
                    <path
                        d="m2 28v20h20v-2h-18v-18zm0 20h-1v1h1zm-1 1h-1v1h1z"
                        class="fill-medium"
                    />
                    <path
                        d="m0 28v21h1v-1h1v-20zm5 17v1h17v-1z"
                        class="fill-light"
                    />
                </g>

                <g class="chisel">
                    <rect
                        y="26"
                        width="5"
                        height="1"
                        class="fill-dark"
                    />
                    <rect
                        x="22"
                        y="46"
                        width="1"
                        height="4"
                        class="fill-dark"
                    />
                    <rect
                        y="27"
                        width="5"
                        height="1"
                        class="fill-light"
                    />
                    <path
                        d="m22 45v1h1v4h1v-5z"
                        class="fill-light"
                    />
                </g>
            </svg>
            <svg
                id="lower-right"
                height="50"
                width="100%"
                viewBox="0 0 50 50"
                preserveAspectRatio="xMaxYMax"
            >
                <g>
                    <path
                        d="m48 28v20h-20v2h22v-22z"
                        class="fill-dark"
                    />
                    <path
                        d="m46 28v18h-18v2h20v-20z"
                        class="fill-medium"
                    />
                    <path
                        d="m45 28v17h-17v1h18v-18z"
                        class="fill-light"
                    />
                </g>

                <g class="chisel">
                    <rect
                        x="26"
                        y="46"
                        width="1"
                        height="4"
                        class="fill-dark"
                    />
                    <rect
                        x="46"
                        y="26"
                        width="4"
                        height="1"
                        class="fill-dark"
                    />
                    <path
                        d="m26 45v1h1v4h1v-5z"
                        class="fill-light"
                    />
                    <path
                        d="m45 26v2h5v-1h-4v-1z"
                        class="fill-light"
                    />
                </g>
            </svg>
            <svg
                id="upper-right"
                height="50"
                width="100%"
                viewBox="0 0 50 50"
                preserveAspectRatio="xMaxYMin"
            >
                <g>
                    <path
                        d="m49 1v1h-1v20h1 1v-21h-1zm-21 3v1h18v-1h-18z"
                        class="fill-dark"
                    />
                    <path
                        d="m49 0v1h1v-1h-1zm0 1h-1v1h1v-1zm-1 1h-20v2h18v18h2v-18-2z"
                        class="fill-medium"
                    />
                    <path
                        d="m28 0v2h20v-1h1v-1h-1-20zm17 5v17h1v-17h-1z"
                        class="fill-light"
                    />
                </g>

                <g class="chisel">
                    <rect
                        x="26"
                        width="1"
                        height="5"
                        class="fill-dark"
                    />
                    <rect
                        x="46"
                        y="22"
                        width="4"
                        height="1"
                        class="fill-dark"
                    />
                    <rect
                        x="27"
                        width="1"
                        height="5"
                        class="fill-light"
                    />
                    <path
                        d="m45 22v2h5v-1h-4v-1z"
                        class="fill-light"
                    />
                </g>
            </svg>
        </defs>

        <use xlinkHref="#upper-middle"></use>
        <use xlinkHref="#left-middle"></use>
        <use
            xlinkHref="#lower-middle"
            transform="translate(0, -5)"
        ></use>
        <use
            xlinkHref="#right-middle"
            transform="translate(-5, 0)"
        ></use>

        <use xlinkHref="#upper-left"></use>
        <use xlinkHref="#upper-right"></use>
        <use
            xlinkHref="#lower-left"
            transform="translate(0, -50)"
            y="100%"
        ></use>
        <use
            xlinkHref="#lower-right"
            transform="translate(0, -50)"
            y="100%"
        ></use>
    </svg>
</div>