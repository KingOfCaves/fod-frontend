interface WindowTitlebarProps {
    children?: string
}

function WindowTitlebar(props: WindowTitlebarProps) {
    return (
        <div className="window__titlebar">
            <div className="window__titlebar__menu">
                <svg
                    width="18"
                    height="18"
                    version="1.1"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="crispEdges"
                >
                    <g>
                        <g className={'fill-dark'}>
                            <rect
                                x="1"
                                y="17"
                                width="17"
                                height="1"
                            />
                            <rect
                                x="17"
                                y="1"
                                width="1"
                                height="16"
                            />
                        </g>
                        <g className={'fill-medium'}>
                            <rect
                                x="1"
                                y="1"
                                width="16"
                                height="16"
                            />
                        </g>
                        <g className={'fill-light'}>
                            <rect
                                width="18"
                                height="1"
                            />
                            <rect
                                y="1"
                                width="1"
                                height="17"
                            />
                        </g>
                    </g>
                    <g className={'inner'}>
                        <g className={'fill-dark'}>
                            <rect
                                x="4"
                                y="10"
                                width="11"
                                height="1"
                            />
                            <rect
                                x="14"
                                y="7"
                                width="1"
                                height="3"
                            />
                        </g>
                        <g className={'fill-light'}>
                            <rect
                                x="3"
                                y="6"
                                width="12"
                                height="1"
                            />
                            <rect
                                x="3"
                                y="7"
                                width="1"
                                height="4"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            <div className="window__titlebar__header">{props.children}</div>
            <div className="window__titlebar__exit">
                <svg
                    width="18"
                    height="18"
                    version="1.1"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                        <g className={'fill-dark'}>
                            <rect
                                x="1"
                                y="17"
                                width="17"
                                height="1"
                            />
                            <rect
                                x="17"
                                y="1"
                                width="1"
                                height="16"
                            />
                        </g>
                        <g className={'fill-medium'}>
                            <rect
                                x="1"
                                y="1"
                                width="16"
                                height="16"
                            />
                        </g>
                        <g className={'fill-light'}>
                            <rect
                                width="18"
                                height="1"
                            />
                            <rect
                                y="1"
                                width="1"
                                height="17"
                            />
                        </g>
                    </g>
                    <g className={'inner'}>
                        <g className={'fill-dark'}>
                            <rect
                                x="10"
                                y="8"
                                width="1"
                                height="3"
                            />
                            <rect
                                x="8"
                                y="10"
                                width="2"
                                height="1"
                            />
                        </g>
                        <g className={'fill-light'}>
                            <rect
                                x="7"
                                y="7"
                                width="4"
                                height="1"
                            />
                            <rect
                                x="7"
                                y="8"
                                width="1"
                                height="3"
                            />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default WindowTitlebar
