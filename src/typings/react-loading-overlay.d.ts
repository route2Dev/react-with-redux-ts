
declare module 'react-loading-overlay' {
    import * as React from 'react';

    export interface LoadingOverlayProps {
        active: boolean;
        spinner: any;
        text: string;
    }

    export default class LoadingOverlay extends React.Component<LoadingOverlayProps, any> {}

}