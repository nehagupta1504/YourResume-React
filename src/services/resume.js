import axios from "axios";
import FileSaver from "file-saver";
import { backendUrl } from "../constants/constant";
export const downloadResume = async (keys) => {
    const data = {};
    keys.forEach((key) => {
        data[key] = JSON.parse(localStorage.getItem(key));
    });
    axios
        .post(`${backendUrl}/resume`, data, { responseType: "blob" })
        .then((res) => res.data)
        .then((blob) =>
            FileSaver.saveAs(blob, `${data["personalInformation"].name} resume`)
        );
};
