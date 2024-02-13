import { pool } from '../db.js';

export const getAlltasks = async(req,res)=>{    
    try {
        const { rows } = await pool.query('SELECT * FROM tasks');    
        res.json(rows);        
    } catch (error) {
        res.status(500).json({message : error});
    }
}

export const getItasks = async (req,res)=>{
    try{
        const idTask = req.params.id;
        const {rows} = await pool.query('SELECT * FROM tasks WHERE id=$1',[idTask]);
        res.json(rows);
    }catch(error){
        res.status(500).json({message : "Error al buscar el libro"});
    }
}

export const postTasks = async (req,res)=>{
    try {
        const {id , title, description} = req.body;
        const resu = await pool.query('INSERT INTO tasks (id,title,description) VALUES ($1,$2,$3)',[id,title,description]);
        res.json({
            id,
            title,
            description
        });        
    } catch (error) {
        res.status(500).json({message : "Error al registrar el libro"});
    }
}

export const patchTasks = async (req,res)=>{
    try{
        const {id,title,description} = req.body;
        const xid = req.params.id;
        const resu = await pool.query('UPDATE tasks SET title=$1 , description=$2 WHERE id=$3',[title,description,xid]);
        console.log("antes del no return");
        if (resu.rowCount <= 0 ){
            return res.status(404).end("No se modifico el registro");
        }
        console.log("despues del no return");
        const regiModi = await pool.query('SELECT * FROM tasks WHERE id=$1',[xid]);
        res.json(regiModi);
    }catch(error){
        res.status(500).json({message : "Error al modificar el libro"});
    }
}

export const deleteTasks = async (req,res)=>{
    try {
        const xid = req.params.id;
        const resu = await pool.query('DELETE FROM tasks WHERE id=$1',[xid]);        
        if (resu.rowCount <=0 ){
            return res.status(404).end("Registro no encontrado");            
        }
        res.json({ message: "Registro eliminado correctamente!"}) ;        
    } catch (error) {
        res.status(500).json({message : "Error al eliminar el libro"});
    }
}