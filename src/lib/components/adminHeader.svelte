
    
    <div class="adminheader">
        <div class="logo">
            <img width="800rem" height="350rem" src="https://i.pinimg.com/736x/b9/94/41/b994419acce495d6fd2ec7d1d6f5c2b5.jpg">
        </div>
        <div class="menu">
            <div>
                <button class="quotes"><a href="/admin/quotes">Quotes</a></button> 
            </div>
            <div>
                <button class="invoices"><a href="/admin/invoices">Invoices</a></button>
            </div>
            <div>
                <button class="schedule"><a href="/admin/schedule">Schedule</a></button>
            </div>
        </div>
    </div>

<style>
    .menu{
        margin-top: -11rem;
    }
    .quotes {
    background-color:rgb(54, 161, 197);
    width:28rem ;
    padding-left: 4rem;
    font-size: x-large;
    border-radius: 10px;
    margin-bottom: 1rem;
    margin-top:2rem;
    transition: transform 0.2s ease;
    
}
.quotes:hover{
    transform: scale(1.1);
}
.invoices {
    background-color:rgb(194, 82, 30);
    width: 40rem;
    padding-left: 4rem;
    font-size: x-large;
    border-radius: 10px;  
    margin-bottom: 1rem;
    transition: transform 0.2s ease;
}
.invoices:hover{
    transform: scale(1.1);
}
.schedule {
    background-color:rgb(26, 145, 55);
    width: 52rem;
    padding-left: 4rem;
    font-size: x-large;
    border-radius: 10px;
    transition: transform 0.2s ease;
}
.schedule:hover{
    transform: scale(1.1);
}
a {
        text-decoration: none;
        color:white;
    }
.logo{
    background-color: rgb(12, 10, 9);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem
}
</style>