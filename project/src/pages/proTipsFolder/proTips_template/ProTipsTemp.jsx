
import Sec1_tips from "../proTips_template/components/sec1_tips/Sec1_tips";
import Sec2_tips from "../proTips_template/components/sec2_tips/Sec2_tips";
import Sec3_tips from "../proTips_template/components/sec3_tips/Sec3_tips";
import Sec4_tips from "../proTips_template/components/sec4_tips/Sec4_tips";
import Sec5_tips from "../proTips_template/components/sec5_tips/Sec5_tips";

export default function MProTipsTemp({
  sec2_tips_img,
  sec2_tips_title,
  sec2_tips_list,
  sec3_tips_title,
  sec3_tips_text,
  sec3_tips_imgs,
  sec3_tips_coloredText,
  sec3_tips_colredTitle,
  sec4_tips_list,
  sec4_tips_img,
  sec4_tips_title,
  sec5_tips_title,
  sec5_tips_coloredTitle,
  sec5_tips_list,
  sec1_tips_img,
  sec1_tips_title,
  sec1_tips_desc,
}) {
  return (
    <>
      <Sec1_tips
        sec1_tips_img={sec1_tips_img}
        sec1_tips_title={sec1_tips_title}
        sec1_tips_desc={sec1_tips_desc}
      />
      <div className="container">
        <Sec2_tips
          sec2_tips_img={sec2_tips_img}
          sec2_tips_title={sec2_tips_title}
          sec2_tips_list={sec2_tips_list}
        />
        <Sec3_tips
          sec3_tips_title={sec3_tips_title}
          sec3_tips_text={sec3_tips_text}
          sec3_tips_imgs={sec3_tips_imgs}
          sec3_tips_coloredText={sec3_tips_coloredText}
          sec3_tips_colredTitle={sec3_tips_colredTitle}
        />
        <Sec4_tips
          sec4_tips_title={sec4_tips_title}
          sec4_tips_img={sec4_tips_img}
          sec4_tips_list={sec4_tips_list}
        />
        <Sec5_tips
          sec5_tips_title={sec5_tips_title}
          sec5_tips_coloredTitle={sec5_tips_coloredTitle}
          sec5_tips_list={sec5_tips_list}
        />
      </div>
    </>
  );
}
