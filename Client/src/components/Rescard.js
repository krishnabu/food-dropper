import { logo_restaurent } from "../utils/logolinks";
const Rescard=(props)=>{
    const {resdata }=props;
    return(
        <div className="m-4 p-4 w-60 bg-gray-100 rounded-2xl overflow-y-auto hover:bg-gray-200">
            <img className="rounded-lg" src={logo_restaurent+resdata.info.cloudinaryImageId}/>
            <h3 className="font-bold text-lg">{resdata.info.name}</h3>
            <h3>{resdata.info.locality}</h3>
            <h3>{resdata.info.cuisines.join(",")}</h3> 
            <h3>{resdata.info.costForTwo}</h3>
            <h3>{resdata.info.avgRating} Star</h3>
        </div>
    )
}
export default Rescard;