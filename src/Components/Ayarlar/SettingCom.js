import React, { useEffect, useRef, useState } from "react";
import "./SettingCom.css";
import { FaRegWindowClose } from "react-icons/fa";

export default function SettingCom({ clicking, show, handle }) {
  useEffect(() => {
    let opac = "0.5";
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
      single_color.setAttribute("prop", colors_array[i]);
      single_color.style.backgroundColor = colors_array[i];
      single_color.style.width = "2.5rem";
      single_color.style.height = "2.5rem";
      single_color.style.opacity = opac;
      colors.append(single_color);
    }

    fonts_size_array.forEach((e, index) => {
      let single_size;
      single_size = document.createElement("span");
      single_size.setAttribute("font_size", e);
      single_size.setAttribute("prop", e);
      single_size.style.backgroundColor = "#fff";
      single_size.style.width = Math.sqrt(e) - Math.sqrt(Math.sqrt(e)) + "rem";
      single_size.style.height = Math.sqrt(e) - Math.sqrt(Math.sqrt(e)) + "rem";
      single_size.style.display = "flex";
      single_size.style.justifyContent = "center";
      single_size.style.alignItems = "center";
      single_size.style.cursor = "pointer";
      single_size.style.opacity = opac;
      single_size.style.fontSize = e + "px";
      single_size.textContent = "T";
      font_size.append(single_size);
    });

    font_family_array.forEach((e, index) => {
      let single_family;
      single_family = document.createElement("span");
      single_family.setAttribute("font_family", e);
      single_family.setAttribute("prop", e);
      single_family.style.backgroundColor = "#fff";
      single_family.style.display = "flex";
      single_family.style.justifyContent = "center";
      single_family.style.alignItems = "baseline";
      single_family.style.opacity = opac;
      single_family.style.cursor = "pointer";
      single_family.style.fontFamily = e;
      single_family.textContent = "Lorem Lorem Lorem Lorem";
      font_family.append(single_family);
    });

    let all_props = document.querySelectorAll(".items-box span");

    let prop_obj = JSON.parse(localStorage.getItem("props_arr"))
      ? JSON.parse(localStorage.getItem("props_arr"))
      : { color: "balck", font: "sans-serif", size: "24px" };

    all_props.forEach((e) => {
      e.addEventListener("click", (event) => {
        e.parentElement.querySelectorAll("span").forEach((act) => {
          act.classList.remove("active");
        });
        e.classList.add("active");

        let parent = event.target.closest([".sub-box"]);
        parent = parent.className.split(" ")[0];
        if (parent === "color-box") {
          prop_obj.color = event.target.getAttribute("color");
        } else if (parent === "font-box") {
          prop_obj.font = event.target.getAttribute("font_family");
        } else {
          prop_obj.size = event.target.getAttribute("font_size");
        }
        call();
      });
    });

    function call() {
      localStorage.setItem(`props_arr`, JSON.stringify(prop_obj));
      changeProps();
    }

    window.onload = () => {
      changeProps();
    };

    function changeProps() {
      let element_arr = [];

      if (localStorage.getItem("props_arr")) {
        prop_obj = JSON.parse(localStorage.getItem("props_arr"));
        all_props.forEach((element) => {
          let my_prop = element.getAttribute("prop");
          // console.log(my_prop);
          if (
            my_prop === prop_obj.color ||
            my_prop === prop_obj.font ||
            my_prop === prop_obj.size
          ) {
            element_arr.push(element);
            console.log("true");
          }
        });
        element_arr.forEach((set_active) => {
          set_active.classList.add("active");
        });
      }
      document.querySelector(".text p").style.color = prop_obj.color;
      document.querySelector(".text p").style.fontFamily = prop_obj.font;
      document.querySelector(".text p").style.fontSize = prop_obj.size + "px";

      // if (localStorage.getItem("props_arr")) {
      //   console.log(JSON.parse(localStorage.getItem("props_arr")));
      // }
    }
  }, [handle]);

  return (
    <>
      <div className={`props-main-box ${handle && show}`}>
        <FaRegWindowClose
          className="closing-icon"
          onClick={() => {
            // console.log(clicking);
            // console.log(clicking);
            clicking();
          }}
        />
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
}

// export default SettingCom;
