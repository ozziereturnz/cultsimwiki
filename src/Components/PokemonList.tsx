import * as React from "react";
import { EnpoklepediaConsumer, IEnpoklepediaContextState } from "../State/EnpoklepediaContext";
import { PokemonNumber } from "./PokemonNumber";

export interface IPokemonListProps {
}

export interface IPokemonListState {
}

export class PokemonList extends React.Component<IPokemonListProps, IPokemonListState> {
    constructor(props: IPokemonListProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return (
            <EnpoklepediaConsumer>
                {(context) => this.createPokemonList(context)}
            </EnpoklepediaConsumer>
        );
    }

    private createPokemonList = (context: IEnpoklepediaContextState) => {
        if (context.Pokemon) {
            return (
                context.Pokemon.map((pokemon, index) => {
                    return (
                        <div key={index}>
                            <PokemonNumber Number={pokemon.Number} />
                            <span>: {pokemon.Name}</span>
                        </div>
                    );
                })
            );
        } else {
            context.GetAllPokemon();
            return <div>Loading...</div>;
        }
    }
}