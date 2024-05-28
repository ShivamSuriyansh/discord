import db from '@/lib/db'
import { initialProfile } from '@/lib/initial-profile';
import { redirect } from 'next/navigation';

const SetupPage = async()=>{

    const profile = await initialProfile();
    const server = await db.server.findFirst({
        where : {
            member : {
                some :{
                    profileId : profile.id
                }
            }
        }
    })

    if(server){
        redirect(`/servers/${server.id}`)
    }

    return <div>
        create a server
    </div>
}
export default SetupPage;