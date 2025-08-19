import cats from "./_cats";

export default defineEventHandler((event)=>{
    const index = Math.floor(Math.random() * cats.length);
    return cats[index];
})