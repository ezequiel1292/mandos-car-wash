<script>
import MenuBar from "$lib/components/menuBar.svelte"
import ServiceType from "$lib/components/serviceType.svelte";
</script>

<body class="body"> 
    <header>
        <MenuBar/>
    </header>
    <main class="main">
        <div class="service1">
            <ServiceType name="Basic Interior and Exterior Wash" description1="Pre-Rinse & Foam Cannon Wash: Lift away dirt and grime with our high-quality foam wash.
            Interior Wipe Down & Vacuum: Enjoy a spotless interior with meticulous cleaning.
            Wheel Cleaning & Tire Dressing: Enhance the look and longevity of your wheels and tires."/>
        </div>
        <div class="service2">
            <ServiceType name="Mini Detail" description1="Exterior Services:
            Pre-Rinse & Foam Cannon Wash: Lifts away dirt and grime.
            Door Jams Cleaned: Ensures every corner is spotless.
            Wheel Wells Scrubbed: Removes road debris for a pristine look.
            Rims (Inner and Outer) Cleaned: Restores shine to your wheels.
            Gas Cap Area Cleaned: Adds attention to detail where it matters.
            Trunk Vacuum: Leaves no area untouched.
            Truck Bed Cleaned: Perfect for pickup truck owners.
            Interior Services:"
            description2="
            Interior Wipe Down & Vacuum: Provides a spotless interior.
            Cup Holder & Center Console Deep Clean: Eliminates hidden dirt and grime.
            Leather Conditioned: Restores and protects leather surfaces.
            Air Vents Dusted: Improves air quality and appearance.
            All Surfaces Dressed: Adds a luxurious finish to your car.
            Final Touch:"
            description3="
            Tire Dressing: Enhances the appearance and longevity of tires.
            Final Touch Shine: Leaves your car looking showroom-ready."/>
        </div>
        <div class="service3">
        <ServiceType name="Bio Hazard Cleaning" description1="Biohazard Cleanup & Disinfection:

        Thorough cleanup of biohazardous materials, including blood, bodily fluids, and other contaminants.
        Complete disinfection using hospital-grade cleaning agents to eliminate pathogens and bacteria."/> 
        </div>  
     </main>




</body>












<style>
.headerImage{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}
.body{
  
    height:100%;
}
.main{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 2rem;
}
.service1{
    background-color: rgb(69, 76, 98);
    border-radius: 15px;
    margin-right:2rem;
    margin-left: 2rem;
    padding-right:1rem;
    margin-bottom: 2rem;
}
.service2{
    background-color: rgb(69, 76, 98);
    border-radius: 15px;
    margin-right:2rem;
    padding-right:1rem;
    margin-bottom: 2rem;
}
.service3{
    background-color: rgb(69, 76, 98);
    border-radius: 15px;
    margin-right:2rem;
    padding-right:1rem;
    margin-bottom: 2rem;
}
.body{
    background:rgba(3, 3, 25, 0.885);
    height:100%;
}
</style>