import BrandingProjectDetail from "./templates/BrandingProjectDetail";
import DefaultProjectDetail from "./templates/DefaultProjectDetail";
import SocialDesignProjectDetail from "./templates/SocialDesignProjectDetail";
import ProjectLocalLandingLink from "@/app/components/ProjectLocalLandingLink";

const TEMPLATES_BY_CATEGORY = {
  Branding: BrandingProjectDetail,
  "Diseño de Redes": SocialDesignProjectDetail,
};

export default function ProjectDetail(props) {
  const Template = TEMPLATES_BY_CATEGORY[props.project.category] ?? DefaultProjectDetail;

  return (
    <>
      <Template {...props} />
      <ProjectLocalLandingLink project={props.project} />
    </>
  );
}
