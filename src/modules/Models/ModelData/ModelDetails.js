import { PriceDiscount, normalPriceCount, rxFindCount } from "../../../env"
import tabletrans from "../../../translate/tables"
import ModelQuickDetail from "../ModelComponent/ModelQuickDetail"

function ModelDetails(props){
    const detail=props.data
    const model=props.content
    return(
    <div class="details-box">
        <div class="details-header">
            <p>{tabletrans.details[props.lang]}</p>
            <i class="fa-solid fa-pen pen"></i>
        </div>
        <ModelQuickDetail model={model} />
        
    </div>
    )
}
export default ModelDetails