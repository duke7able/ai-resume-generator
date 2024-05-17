import theme from "jsonresume-theme-caffeine";
import pptr from "puppeteer";
import fs from "fs";
import configEnv from "../../../env.js";
import imageResize from "./imageResize.js";

import cheerio from "cheerio";

const htmlToPdf = async (req, htmlFilePath, pdfFilePath) => {
  const browser = await pptr.launch();
  const page = await browser.newPage();
  await page.emulateMediaType("print");
  await page.goto(htmlFilePath, { waitUntil: "networkidle0" });

  await page.pdf({
    path: pdfFilePath,
    format: "A4",
    printBackground: true,
    ...theme.pdfRenderOptions,
  });
  await browser.close();
  console.log("PDF Generated");
};

const addProfilePic = (req, resumeHtmlFile, jsonData, theme, userImage) => {
  // Resize Profile Picture
  const imagePath = `routes/generateResume/images/${userImage}`;
  let newImagePath = `routes/generateResume/images/pfp_${userImage}`;
  imageResize(imagePath, newImagePath);

  newImagePath = `${configEnv.URL_HOSTED}/resume/image/pfp_${userImage}`;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        fs.readFile(resumeHtmlFile, "utf8", function (err, data) {
          if (err) console.log(err);
          let projectSection;
          let $ = cheerio.load(data);
          switch (theme) {
            case "kendall":
              console.log("INSIDE KENDALL");
              let category = $("h2")
                .filter(function () {
                  return $(this).text().trim() === "Projects";
                })
                .next();

              $(category)
                .find("li")
                .each((i, tag) => {
                  // for (let i = 0; i < User.projects.length; i++) {
                  let project = jsonData.projects[i].split(",");

                  $(tag).append(
                    `<div class="endDate pull-right">${project[2]}</div>`
                  );
                  $(tag).append(
                    `<div class="project-desc"><i>${project[1]}</i></div>`
                  );
                  // console.log($(tag).text(), '--');
                  // }
                });
              break;

            default:
              $("img").attr("src", `${newImagePath}`);
              if (jsonData.projects && jsonData.projects.length > 0) {
                let projectData = "";
                for (let i = 0; i < jsonData?.projects?.length || 0; i++) {
                  project = jsonData.projects[i].split(",");
                  projectData += `
                                          <section class="item">
                                              <div class="section-header clearfix">
                                                  <h3 class="bold pull-left">
                                                          ${project[0]}
                                                  </h3>
                                                  <h5 class="italic pull-right">
                                                          <span class="startDate">${project[2]}</span>
                                                  </h5>
                                              </div>
                                              <h4>${project[1]}</h4>
                                          </section>
                                          `;
                }
                projectSection = `
                                      <div class="container education-container">
                                      <div class="title">
                                          <h3>Projects</h3>
                                          <div class="keyline"></div>
                                          ${projectData}
                                      </div>
  
                                  </div>`;
                $(".education-container")
                  .find(".item")
                  .each((i, tag) => {
                    let spanEndDateObj = $(tag).find(".endDate");
                    let year = spanEndDateObj.text().split("/").slice(-1); // .slice(-1) = last item
                    // console.log(spanEndDateObj.text().split("/").slice(-1));

                    // replace date with year only
                    spanEndDateObj.replaceWith(
                      `<span class="endDate"> ${year} </span>`
                    );

                    // remove startDate
                    $(tag).find(".startDate").remove();
                  });
                if (projectSection) {
                  $(".education-container").after(projectSection);
                }
              }
          }

          const result = $.html();

          // save changes in the same file
          fs.writeFile(resumeHtmlFile, result, "utf8", function (err) {
            if (err) console.log(err);
          });

          resolve(`Check changes in ${resumeHtmlFile}`);
        });
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

export { addProfilePic, htmlToPdf };
