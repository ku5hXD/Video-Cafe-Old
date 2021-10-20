import axios from "axios";

const fetchData = (category, handleDetails, handleDates) => {

    axios
        .get(`http://localhost:8000/details2?category=${category}`)
        .then((res) => {

            var dataDuplicate = [];
            for (var i = 0; i < res.data.length; i++) {
                dataDuplicate = [
                    ...dataDuplicate,
                    {
                        _id: res.data[i]._id,
                        videoname: res.data[i].videoname,
                        description: res.data[i].description,
                        thumbnailpath: res.data[i].thumbnailpath,
                    },
                ];
            }

            axios
                .get("http://localhost:8000/date")
                .then((res) => {

                    const needyDate = res.data.filter((date) => {
                        const mydate = dataDuplicate.find((ele) => {
                            return ele._id === date._id;
                        });

                        return mydate;
                    });

                    let clone = []

                    needyDate.forEach((element) => {
                        clone.push(element.uploadDate)
                    });

                    handleDates(clone)

                })
                .catch((err) => {
                    console.log(err);
                });

            handleDetails(dataDuplicate)

        })
        .catch((e) => {
            console.log(e);
        });
}


export default fetchData