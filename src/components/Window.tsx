import WindowBorder from './WindowBorder.tsx';
import WindowTitlebar from './WindowTitlebar.tsx';
import { useMemo } from 'react';

interface WindowProps {
    uid: string;
    color?: string;
    width?: string;
    height?: string;
    engraved?: boolean;
    title?: string;
    children?: string | React.ReactNode;
}

function Window(props: WindowProps) {
    const classConcat = useMemo(() => {
        const classArr = ['window', props.engraved && 'window--engraved'];
        return classArr.join(' ').trim();
    }, [props.engraved]);

    return (
        <div
            key={`${props.uid}_window`}
            style={
                {
                    '--border-medium': props.color
                } as React.CSSProperties
            }
            className={classConcat}
        >
            <WindowBorder key={`${props.uid}_border`} />
            {props.title && <WindowTitlebar>{props.title}</WindowTitlebar>}
            <div className="window__content">{props.children}</div>
        </div>
    );
}

export default Window;
