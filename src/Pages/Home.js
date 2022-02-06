import React from 'react'
import Section from "../Components/Section";

export default function Home() {
    return (
           <>
			<Section 
				title="Model 3"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				modelImage="images/model-3.jpg"
				arrow = {true}
			/>
			<Section 
				title="Model Y"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				modelImage="images/model-Y.jpg"
			/>
			<Section 
				title="Model S"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				modelImage="images/model-s.jpg"
			/>
			<Section 
				title="Model X"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				modelImage="images/model-x.jpg"
			/>
			<Section 
				title="Solar Roof"
				tagline="Lower Cost Solar Panels in India"
				leftBtn="Order Now"
				rightBtn="Learn More"
				modelImage="images/solar-roof.jpg"
			/>
			<Section 
				title="Solar Panels"
				tagline="Produce Clean Energy from your roof"
				leftBtn="Order Now"
				rightBtn="Learn More"
				modelImage="images/solar-panel.jpg"
			/>
			<Section 
				title="Accessories"
				leftBtn="Order Now"
				rightBtn=""
				modelImage="images/accessories.jpg"
			/>			
        </>
    )
}
