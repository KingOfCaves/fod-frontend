<script lang="ts">
    export let title: String = "title";
</script>

<div class="window__titlebar">
    <div class="window__titlebar__menu">
        <svg
            width="18"
            height="18"
            version="1.1"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
        >
            <g>
                <g class='fill-dark'>
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
                <g class='fill-medium'>
                    <rect
                        x="1"
                        y="1"
                        width="16"
                        height="16"
                    />
                </g>
                <g class='fill-light'>
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
            <g class='inner'>
                <g class='fill-dark'>
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
                <g class='fill-light'>
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
    <div class="window__titlebar__header">
        {title}
    </div>
    <div class="window__titlebar__exit">
        <svg
            width="18"
            height="18"
            version="1.1"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <g class='fill-dark'>
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
                <g class='fill-medium'>
                    <rect
                        x="1"
                        y="1"
                        width="16"
                        height="16"
                    />
                </g>
                <g class='fill-light'>
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
            <g class='inner'>
                <g class='fill-dark'>
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
                <g class='fill-light'>
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