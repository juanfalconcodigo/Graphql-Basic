import { IResolvers } from "graphql-tools";

const query : IResolvers={
    Query:{
        hello():string{
            return `Hola mundo refactorizado`;
        },
        helloName(__:void,{name}):string{
            return `Hola ${name}`;
        },
        helloGraphql():string{
            return `Hola es el inicio de graphql`;
        }
    }
}

export default query;