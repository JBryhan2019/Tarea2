const Tarea=require('../database/models/esquemaTarea');
const express=require('express');
var sha1 = require('sha1');

const router=express.Router();
/////////////////////////////////////-----------------PRIMERA PARTE

router.get('/primera/:datos',(req,res,next)=>{
    console.log("estos son los datos rescatados en postman "+req.params.datos);
    const str=req.params.datos;
    const vec=str.split('-');
    console.log("este es el vector con los datos a procesar"+vec);
        var array1 = [50,60,70];
        var array2 = [60,45];
        var array3 = [];

        for (var i=0; i<array1.length; i++) {
        array3.push(array1[i]+array2[i]);
        }

        for (var i=0; i<array3.length; i++) {
        alert("Resultado " + i + " : " + array3[i]);
        }
    next();
});


router.post('/segunda',(req,res,next)=>{
    const matriz=req.body.matriz;
    console.log(matriz);
    // la longitud puede variar dependiendo del tamaño de matriz q le envies
    for(var i=0;i<2;i++){
      for(var j=0;j<3;j++){
        console.log(matriz[i][j]);
      }
    }
    import java.util.Scanner;

        public class CuadradoBlanco {

        public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        System.out.print("Por favor ingrese el tamaño del cuadrado: ");
        int n = teclado.nextInt();

        if(n >= 0 && n<=50) {
            //Linea superior
            for(int i = 0; i < n; i++) {
                System.out.print("*");
            }
            System.out.println();

            //centro de la forma
            for(int i = 0; i < n-2; i++) {
                System.out.print("*");
                for(int j = 0; j < n-2; j++) {
                    System.out.print(" ");
                }
                System.out.println("*");
            }

            //Linea inferior
            for(int i = 0; i < n; i++) {
                System.out.print("*");
            }
        }else {
            System.out.println("Error. El dato a ingresar de "
                    + "estar entre 0 y 50");
        }


    }
}
    next();
});

router.get('/tercera/:datos',(req,res,next)=>{
    console.log("datos enviados "+req.params.datos);
    const str=req.params.datos;
    const separar=str.split(' ');
    const a=separar[0].split('-');
    const b=separar[1].split('-');
    //vectores ya separados y listos para hacer operaciones
    console.log(a+" | "+b);
    public class igualarArray {

	public static void main(String args[])
	{
		byte[] elemento_uno = {1,2,3};
		byte[] elemento_dos = {1,2,3};
		byte comparacion = 0;

		for(int i = 0; i < 3;i++)
		{

		 if(elemento_uno[i] == elemento_dos[i])
		 {
			comparacion++;

		 }
		 if(comparacion == 3)
		 {
			 System.out.println("Los dos vectores son iguales");

		 }

		}
		if(comparacion < 3)
		{
			System.out.println("Los dos vectores son distintos");

		}

	}

}

    next();
});


//////////////////////////-------SEGUNDA PARTE



router.get('/',function(req,res,next){
    Tarea.find().exec().then(resultado=>{
      if(resultado.length==0){
        res.json({
          message:"no existen users en la bd"
        });
      }else{
        res.json(resultado);
      }
    }).catch(err=>{
      res.status(500).json({
        message:err
      });
    });
});

router.post('/',function(req,res,next){
    console.log(req.body);
    var datos={
      nombre:req.body.nombre,
    };
    var Ins=new Tarea(datos);
    Ins.save().then(()=>{
      res.json({
        message:"User insertado en bd"
      });
    }).catch(err=>{
      res.status(500).json({
        message:err
      });
    });
});

router.patch('/:id',function(req,res,next){
  var id=req.params.id;
  var datos={
    nombre:req.body.nombre,
    updateDate:Date.now()
  };
  Tarea.findByIdAndUpdate(id,datos).exec().then(()=>{
    res.json({
      message:"User actualizado"
    });
  }).catch(err=>{
    res.status(500).json({
      message:err
    });
  });
});

router.delete('/:id',function(req,res){
    let idD=req.params.id;
    Tarea.findByIdAndDelete(idD).exec().then(()=>{
      res.json({
        message:"User eliminado"
      });
    }).catch(err=>{
      res.status(500).json({
        message:err
      });
    });
});
module.exports=router;
