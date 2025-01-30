window.startWebCam = async function () {
    try {
        const video = document.getElementById('selfview');
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error("Error accessing webcam: ", err);
    }
};

