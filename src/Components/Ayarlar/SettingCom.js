import React, { useEffect } from "react";
import "./SettingCom.css";

const SettingCom = () => {
  useEffect(() => {
    let colors = document.querySelector("[colors]");
    let colors_array = [
      "#e53935",
      "#d81b60",
      "#3949ab",
      "#039be5",
      "#00897b",
      "#43a047",
      "#ffb300",
      "#757575",
    ];

    let font_size = document.querySelector("[font_size]");
    let fonts_size_array = ["16", "18", "20", "22", "24", "28", "32", "36"];

    let font_family = document.querySelector("[font_family_box]");

    let font_family_array = [
      "'Cairo', sans-serif",
      "'Lato', sans-serif",
      "'Montserrat', sans-serif",
      "'Open Sans', sans - serif",
      "'Poppins', sans-serif",
      "'Roboto', sans-serif",
      "'Roboto Mono', monospace",
      "'Work Sans', sans-serif",
    ];

    for (let i = 0; i < colors_array.length; i++) {
      let single_color;
      single_color = document.createElement("span");
      single_color.setAttribute("color", colors_array[i]);
      single_color.style.backgroundColor = colors_array[i];
      single_color.style.width = "2.5rem";
      single_color.style.height = "2.5rem";
      single_color.style.opacity = "0.7";
      colors.append(single_color);
    }

    fonts_size_array.forEach((e, index) => {
      let single_size;
      single_size = document.createElement("span");
      single_size.setAttribute("font_size", e);
      single_size.style.backgroundColor = "#fff";
      single_size.style.width = Math.sqrt(e) - Math.sqrt(Math.sqrt(e)) + "rem";
      single_size.style.height = Math.sqrt(e) - Math.sqrt(Math.sqrt(e)) + "rem";
      single_size.style.display = "flex";
      single_size.style.justifyContent = "center";
      single_size.style.alignItems = "center";
      single_size.style.cursor = "pointer";
      single_size.style.opacity = "0.7";
      single_size.style.fontSize = e + "px";
      single_size.textContent = "T";
      font_size.append(single_size);
    });

    font_family_array.forEach((e, index) => {
      let single_family;
      single_family = document.createElement("span");
      single_family.setAttribute("font_family", e);
      single_family.style.backgroundColor = "#fff";
      single_family.style.display = "flex";
      single_family.style.justifyContent = "center";
      single_family.style.alignItems = "baseline";
      single_family.style.opacity = "0.7";
      single_family.style.cursor = "pointer";
      single_family.style.fontFamily = e;
      single_family.textContent = "Lorem Lorem Lorem Lorem";
      font_family.append(single_family);
    });

    let all_props = document.querySelectorAll(".items-box span");

    let prop_obj = {
      color: "black",
      font: "sans-serif",
      size: "24",
    };

    all_props.forEach((e) => {
      e.addEventListener("click", (event) => {
        let parent = event.target.closest([".sub-box"]);
        parent = parent.classNameName.split(" ")[0];
        if (parent == "color-box") {
          prop_obj.color = event.target.getAttribute("color");
        } else if (parent == "font-box") {
          prop_obj.font = event.target.getAttribute("font_family");
        } else {
          prop_obj.size = event.target.getAttribute("font_size");
        }
        call();
      });
    });

    function call() {
      //       let arr = [];
      //       for (const key in prop_obj) {
      //         if (Object.hasOwnProperty.call(prop_obj, key)) {
      //           const element = prop_obj[key];
      //           // arr.push(element);
      //         }
      //       }
      localStorage.setItem(`props_arr`, JSON.stringify(prop_obj));
      changeProps();
    }

    window.onload = () => {
      changeProps();
    };

    function changeProps() {
      if (localStorage.getItem("props_arr")) {
        prop_obj = JSON.parse(localStorage.getItem("props_arr"));
        console.log(prop_obj);
        // document.querySelector(".text").style.color = prop_obj.color;
        // document.querySelector(".text").style.fontFamily = prop_obj.font;
        // document.querySelector(".text").style.fontSize = prop_obj.size + "px";
      } else {
        // document.querySelector(".text").style.color = prop_obj.color;
        // document.querySelector(".text").style.fontFamily = prop_obj.font;
        // document.querySelector(".text").style.fontSize = prop_obj.size + "px";
      }

      // if (localStorage.getItem("props_arr")) {
      //   console.log(JSON.parse(localStorage.getItem("props_arr")));
      // }
    }
  }, []);
  return (
    <>
      <div className="props-main-box">
        <div className="color-box sub-box">
          <h2>
            <span>Color</span>
          </h2>
          <div className="items-box" colors=""></div>
        </div>
        <div className="size-box sub-box">
          <h2>
            <span>Font Size</span>
          </h2>
          <div className="items-box" font_size=""></div>
        </div>
        <div className="font-box sub-box">
          <h2>
            <span>Font Type</span>
          </h2>
          <div className="items-box" font_family_box=""></div>
        </div>
      </div>
    </>
  );
};

export default SettingCom;
