export class Pinguino{
    
    id: number;
    name: string;
    scientificName: string;
    feeding: string;
    globalDistribution: string;
    description: string;
    image: string;

    constructor(id:number,name: string, scientficName: string, feeding: string, globalDistribution:string, description:string, image:string){
        this.id = id;
        this.name = name;
        this.scientificName = scientficName;
        this.feeding = feeding;
        this.globalDistribution = globalDistribution;
        this.description= description;
        this.image=image;

    }
}