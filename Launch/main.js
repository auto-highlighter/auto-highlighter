window.onload = () => {
    const vodInput = document.getElementById("vod");
    const tsInput = document.getElementById("ts");
    const uploadButton = document.getElementById("upload");
    const downloadButton = document.getElementById("download");
    var hid = "9cbc7333-98f7-40a4-b9fa-e1a3772a3d6c";
    fetch("https://auto-highlighter.azurewebsites.net/api-v1/Highlight")
        .then(res => res.text()).then(response => console.log({ response }))
        .catch(err => console.error(err));

    uploadButton.addEventListener("click", (e) => {
        if (vodInput.files[0]) {
            var formData = new FormData();
            formData.append("vod", vodInput.files[0]);
            formData.append("timeStamps", tsInput.files[0]);
            fetch("https://auto-highlighter.azurewebsites.net/api-v1/Highlight", {
                method: "POST",
                body: formData
            }).then(res => { console.log(res) }).catch(err => console.error(err));
        } else {
            e.preventDefault();
        }
    });

    downloadButton.addEventListener("click", e => {
        if (hid == null) {
            e.preventDefault();
        } else {
            fetch(`https://auto-highlighter.azurewebsites.net/api-v1/Highlight/${hid}`)
                .then(res => { console.log(res); return res.blob() })
                .then(result => { console.log(result); downloadURI(URL.createObjectURL(result), "test-download.json") })
                .catch(err => console.error(err));
        }
    })
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}