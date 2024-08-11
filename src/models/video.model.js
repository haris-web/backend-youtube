import mongoose ,{Schema} from "mongoose";


const videoSchema = new Schema({
    videoFile:{
        type:String,
        required:true,
        unique:true,
    },
    thumbnail:{
        type:String,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    duration:{
        type:Number,
        required:true,
    },
    views:{
        type:Number,
       
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true,
    }
  
},{
    timestamps:true,
})



const Video = mongoose.model("Video", videoSchema);