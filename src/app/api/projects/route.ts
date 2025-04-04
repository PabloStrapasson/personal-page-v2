import createDBConnection from "@/db/config/dbConfig"
import project from "@/db/models/project.model"

export async function GET(){
    try {
        await createDBConnection()

        const projects = await project.find()
        
        if(Object.keys(projects).length === 0){
            return new Response(JSON.stringify({ message: 'Nenhum projeto encontrada' }), {
                status: 404,
                headers: {'Content-type': 'application/json'}
            })
        }

        return new Response(JSON.stringify(projects), {
            status: 200,
            headers: {'Content-type': 'application/json'}
        })

    } catch(err){
        console.error(err)
    }
}