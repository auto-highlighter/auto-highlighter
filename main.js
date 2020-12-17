window.onload = () => {
    const vodInput = document.getElementById("vod");
    const tsInput = document.getElementById("ts");
    const uploadButton = document.getElementById("upload");
    const downloadButton = document.getElementById("download");
    const higlightsList = document.getElementById("highlight-list");
    const hidInput = document.getElementById("hid");
    const refreshButton = document.getElementById("Refresh");

    const refresh = () =>
        fetch("https://auto-highlighter.azurewebsites.net/api-v1/Highlight")
            .then(async (response) => {
                if (response.status != 200) {
                    higlightsList.appendChild(
                        document
                            .createElement("p")
                            .appendChild(
                                document.createTextNode("too many refreshes")
                            )
                    );
                } else {
					response = await response.json();
					
					console.log(response)
					let highlightStatuses = ''
                    response.forEach((hid) => {
                        highlightStatuses+= 
                            `<p>${hid.hid}: status ${hid.status}</p><br>`
					});
					
					higlightsList.innerHTML = highlightStatuses
                }
            })
            .catch((err) => console.error(err));
    refresh();

    refreshButton.addEventListener("click", (e) => {
        e.preventDefault();
        higlightsList.innerHTML = "";
        refresh();
    });

    uploadButton.addEventListener("click", (e) => {
        if (vodInput.files[0]) {
            var formData = new FormData();
            formData.append("vod", vodInput.files[0]);
            formData.append("timeStamps", tsInput.files[0]);
            fetch(
                "https://auto-highlighter.azurewebsites.net/api-v1/Highlight",
                {
                    method: "POST",
                    body: formData,
                }
            )
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.error(err));
        } else {
            e.preventDefault();
        }
    });

    downloadButton.addEventListener("click", (e) => {
        if (hidInput.value == null) {
            e.preventDefault();
        } else {
            fetch(
                `https://auto-highlighter.azurewebsites.net/api-v1/Highlight/${hidInput.value}`
            )
                .then((res) => {
                    console.log(res);
                    return res.blob();
                })
                .then((result) => {
                    console.log(result);
                    downloadURI(
                        URL.createObjectURL(result),
                        `${hidInput.value}.mp4`
                    );
                })
                .catch((err) => console.error(err));
        }
    });
};

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}
