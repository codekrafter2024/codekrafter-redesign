import { plans } from "@/constants/data";
import PlanCard from "./PlanCard";

const PlansTable = () => {
	return (
		<div className='grid gap-4 md:grid-cols-3'>
			{plans.map((plan, _idx) => (
				<PlanCard plan={plan} key={"plan-" + _idx} />
			))}
		</div>
	);
};

export default PlansTable;
