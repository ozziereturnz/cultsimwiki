import * as React from "react";

const EnpoklepediaContext = React.createContext<IEnpoklepediaContextState>(undefined);

export interface IEnpoklepediaContextProps {
    DataSource: enpoklepedia.IDataSource;
}

export interface IEnpoklepediaContextState {
    Pokemon?: enpoklepedia.IPokemon[];

    GetAllPokemon: () => void;
    LoadingPokemon: boolean;
}

export class EnpoklepediaProvider extends React.Component<IEnpoklepediaContextProps, IEnpoklepediaContextState> {
    constructor(props: IEnpoklepediaContextProps) {
        super(props);
        this.state = {
            GetAllPokemon: () => {
                if (this.props.DataSource && !this.state.LoadingPokemon) {
                    this.setState({ LoadingPokemon: true });

                    this.props.DataSource.GetAllPokemon((pokemon: enpoklepedia.IPokemon[]) => {
                        this.setState({ Pokemon: pokemon, LoadingPokemon: false });
                    });
                }
            },
            LoadingPokemon: false,
        };
    }

    public render() {
        return (
            <EnpoklepediaContext.Provider value={this.state}>
                {
                    !this.props.DataSource ?
                        <div>Cannot initialise: Data source not provided to context provider.</div> :
                        this.props.children
                }
            </EnpoklepediaContext.Provider>
        );
    }
}

export const EnpoklepediaConsumer = EnpoklepediaContext.Consumer;