declare module enpoklepedia {
    interface IDataSource {
        GetAllPokemon: (callback: (data: IPokemon[]) => void) => void,
        GetPokemon: (number: number, callback: (data: IPokemon) => void) => void,
    }
}