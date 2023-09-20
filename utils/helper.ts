export async function fetchNewsApi(category = "general" as string, pageParam = 1 as number) {
    // api used with infinite scroll
    return await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=10&page=${pageParam}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    ).then((res) => res.json());
}

export async function fetchNewsSummarApi(requestOptions: any) {
    // api used for new summary
    return await fetch(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        requestOptions
    ).then((res) => res.json());
}


export const draggableClick = (className: string) => {
    const slider: any = document.querySelector(`.${className}`);
    console.log("working", slider)
    let isDown = false;
    let startX: any;
    let scrollLeft: any;

    slider.addEventListener("mousedown", (e: any) => {
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
    slider.addEventListener("mousemove", (e: any) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
};