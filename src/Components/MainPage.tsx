import * as React from "react";

export interface IMainPageProps {
}

export interface IMainPageState {
}

export class MainPage extends React.Component<IMainPageProps, IMainPageState> {
    constructor(props: IMainPageProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <div>Hello world!</div>
        );
    }
}
