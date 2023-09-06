import { defineStore } from "pinia";
import { get_rol, create_rol, update_rol, delete_rol  } from "../services/rol.service";
import { useToast } from "vue-toastification";
import { GetRol } from "../types/rol.type";

const toast = useToast();
export const UseRolStore = defineStore("rol",{
    state:() => ({
        rol: [] as GetRol[],
        pages: [] as Array<string | number>,
        paginates: {
            total: 0,
            totalpages: 0,
            nextpage: 0,
            prevpag: 0,
            currentpage: 0,
        },
    }),
    actions: {
        async GetAllRol() {
            try{
                const data = await get_rol();
                this.rol = data.rol;
            } catch {
                toast.error("Error");
            }
        },
        async CreateRol(rol: string){
            
                const data = await create_rol(rol);

                if (data.ok){
                    await this.GetAllRol()
                    toast.success("Rol creado");
                }else{
                    toast.error("Error al crear el rol");
                }
            
        },

        async DeleteRol(id: number){
            try{
                const data = await delete_rol(id);
                if (data.ok){
                    toast.success("Rol eliminado");
                 }
            } catch {
                toast.error("Error");
            }
        },

        async UpdateRol(id: number,rol: string){
            try{
                const data = await update_rol(id,rol);
                
                if(data.ok){
                    toast.info("Rol actualizado");
                
                }else{
                    toast.error("Error al actualizar el usuario");
                }
            } catch (error) {
                toast.error("Error en el servidor");
            }
        },
    },

});