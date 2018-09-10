import * as React from "react";

const EnpoklepediaContext = React.createContext<IEnpoklepediaContextState>(undefined);

export interface IEnpoklepediaContextProps {
    DataSource: enpoklepedia.IDataSource;
}

export interface IEnpoklepediaContextState {
    Pokemon?: enpoklepedia.IPokemon[];

    GetAllPokemon: () => void;
}

export class EnpoklepediaProvider extends React.Component<IEnpoklepediaContextProps, IEnpoklepediaContextState> {
    constructor(props: IEnpoklepediaContextProps) {
        super(props);
        this.state = {
            GetAllPokemon: () => {
                if (this.props.DataSource) {
                    this.props.DataSource.GetAllPokemon((pokemon: enpoklepedia.IPokemon[]) => {
                        this.setState({ Pokemon: pokemon });
                    });
                }
            },
        };
    }

    public componentDidMount() {
        this.state.GetAllPokemon();
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