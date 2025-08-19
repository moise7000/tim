import cats from "./_cats";

export default defineEventHandler((event)=>{
    const name = event.context.params?.name;
    return cats.find(c=>c.name===name);
})