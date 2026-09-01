export type ServiceId = "plastering" | "rendering" | "venetian" | "specialist";

export interface ServiceDetail {
  id: ServiceId;
  number: string;
  title: string;
  summary: string;
  involves: string[];
  focus: string;
  images: { src: string; alt: string }[];
}

/**
 * Detail content for the four service cards (Services section + Portfolio cards).
 * Reuses facts and phrasing already established elsewhere on the site — nothing here
 * introduces a claim, certification, guarantee or statistic that isn't already made
 * on the page.
 */
export const services: Record<ServiceId, ServiceDetail> = {
  plastering: {
    id: "plastering",
    number: "01",
    title: "Plastering",
    summary:
      "Internal skim and plastering finished smooth and level, ready for decoration.",
    involves: [
      "Skimming and re-plastering walls and ceilings, including repairs to damaged or uneven surfaces.",
      "Preparation of the existing surface before any plaster goes on — the condition underneath is what determines how the finished wall looks.",
      "A smooth, consistent trowel finish, floated and finished ready for painting or decorating.",
    ],
    focus:
      "Getting the preparation and materials right first, so the finished wall is level, consistent, and ready to decorate without further work.",
    images: [
      { src: "/images/posters/clip-15.jpg", alt: "Sponge floating a freshly skimmed plaster wall in a hallway" },
    ],
  },
  rendering: {
    id: "rendering",
    number: "02",
    title: "Rendering",
    summary:
      "Monocouche and silicone render systems applied and finished for lasting exterior performance.",
    involves: [
      "Monocouche and silicone rendering systems, applied over a properly prepared and beaded substrate.",
      "Base-coat application, mesh reinforcement at corners and openings, and a final float or scraped finish.",
      "Full exterior wall coverage, from new-build extensions through to re-rendering existing properties.",
    ],
    focus:
      "Preparation, application and finish — in that order. A render system is only as good as what's underneath it.",
    images: [
      { src: "/images/project-finished-render.jpg", alt: "Finished rear extension with smooth painted render" },
      { src: "/images/posters/clip-14.jpg", alt: "Completed extension with rendered walls and matching entrance door" },
      { src: "/images/project-render-detail.jpg", alt: "Close-up of render beadwork and float-finish texture" },
      { src: "/images/project-basecoat.jpg", alt: "Base-coat rendering applied to a house extension, mid-project" },
    ],
  },
  venetian: {
    id: "venetian",
    number: "03",
    title: "Venetian Plaster",
    summary:
      "A decorative, hand-applied finish with depth and character for feature walls and interiors.",
    involves: [
      "Built up in fine, hand-worked layers and burnished to catch the light differently across the surface.",
      "A decorative, architectural finish rather than a flat, painted one — suited to feature walls, hallways and rooms where the wall itself is meant to be noticed.",
      "Careful surface preparation beforehand, as with any specialist finish, so the final texture reads cleanly.",
    ],
    focus:
      "The texture and depth that comes from hand application — every wall takes on its own character.",
    images: [
      { src: "/images/project-render-detail.jpg", alt: "Close-up of hand-worked trowel texture on a finished surface" },
    ],
  },
  specialist: {
    id: "specialist",
    number: "04",
    title: "Specialist Finishes",
    summary:
      "Beading, mesh reinforcement and detailing carried out to a consistent, considered standard.",
    involves: [
      "Beading and mesh reinforcement at corners, openings and junctions — the detailing that determines how a render or plaster finish holds up over time.",
      "Careful attention to edges, reveals and transitions, rather than treating them as an afterthought.",
      "The same standard of preparation and finish applied across plastering, rendering and Venetian work.",
    ],
    focus: "The details that don't show up in a photo, but decide how the finished surface performs and lasts.",
    images: [
      { src: "/images/posters/clip-11.jpg", alt: "Mesh reinforcement being applied at a render corner detail" },
    ],
  },
};

export const serviceOrder: ServiceId[] = ["plastering", "rendering", "venetian", "specialist"];
