import * as React from "react";
import { execFunc } from "../functionHelper";
import { EnpoklepediaProvider } from "../State/EnpoklepediaContext";
import { PokemonList } from "./PokemonList";

export type ApplicationLoader = (callback: (data: enpoklepedia.IDataSource) => void) => void;

export interface IMainPageProps {
    InitDataSource: string | ApplicationLoader;
}

export interface IMainPageState {
    DataSource: enpoklepedia.IDataSource;
    Loading: boolean;
    ErrorMessage: string;
}

export class MainPage extends React.Component<IMainPageProps, IMainPageState> {
    constructor(props: IMainPageProps) {
        super(props);
        this.state = {
            DataSource: undefined,
            Loading: true,
            ErrorMessage: "",
        };
    }

    public componentDidMount() {
        const initDataSource = (dataSource: enpoklepedia.IDataSource) => {
            if (dataSource) {
                this.setState({ DataSource: dataSource, Loading: false });
            }
        }

        if (this.props.InitDataSource) {
            if (this.props.InitDataSource instanceof Function) {
                this.props.InitDataSource((result) => {
                    initDataSource(result);
                });
            } else {
                execFunc<(dataSource: enpoklepedia.IDataSource) => void>(this.props.InitDataSource)((result) => {
                    initDataSource(result);
                });
            }
        } else {
            this.setState({ ErrorMessage: "Failed to initialise application: Data Source not provided." });
        }
    }

    public render() {
        if (!this.state.Loading) {
            return (
                <EnpoklepediaProvider DataSource={this.state.DataSource}>
                    <PokemonList />
                </EnpoklepediaProvider>
            );
        } else if (this.state.ErrorMessage) {
            return <div>{this.state.ErrorMessage}</div>;
        } else {
            return <div>Loading...</div>;
        }
    }
}
