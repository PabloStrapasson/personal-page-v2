import createDBConnection from "@/db/config/dbConfig"
import certification from "@/db/models/certification.model"

export async function GET(){
    try {
        await createDBConnection()

        const certifications = await certification.find()
        
        if(Object.keys(certifications).length === 0){
            return new Response(JSON.stringify({ message: 'Nenhuma certificação encontrada' }), {
                status: 404,
                headers: {'Content-type': 'application/json'}
            })
        }
        
        return new Response(JSON.stringify(certifications), {
            status: 200,
            headers: {'Content-type': 'application/json'}
        })

    } catch(err){
        console.error(err)
    }
}