import * as React from "react";

export interface IPokemonNumberProps {
    Number: number;
}

export class PokemonNumber extends React.Component<IPokemonNumberProps> {
    public render() {
        return <span>{this.padNumber(this.props.Number)}</span>;
    }

    private padNumber = (number: number) => {
        let result = number.toString();

        while(result.length < 3) {
            result = "0" + result;
        }

        return result;
    }
}