function toggleStory() {
    const storyContainer = document.getElementById("storyContainer");
    const button = document.getElementById("showStoryButton");

    if (storyContainer.classList.contains("hidden")) {
        storyContainer.classList.remove("hidden");
        button.textContent = "Hide the Story";
    } else {
        storyContainer.classList.add("hidden");
        button.textContent = "Read the Story";
    }
}
