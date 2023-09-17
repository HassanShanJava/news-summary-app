export async function fetchNewsApi(category = "general" as string) {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&sources=bbc-news&category=${category}`
    );

    if (!response.ok) {
        throw new Error("New Api Failed");
    }

    return response.json();
}


export const draggableClick = (className:string) => {
    const slider: any = document.querySelector(`.${className}`);
    console.log("working", slider)
    let isDown = false;
    let startX:any;
    let scrollLeft:any;

    slider.addEventListener("mousedown", (e:any) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e:any) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
};