export enum VideoEnum {
  Edit = "ED",
  Production = "PR",
}

export const videoTypes: Array<string> = Object.keys(VideoEnum).map(
  (videoType: string) => videoType.replaceAll("_", " "),
);

export enum ActivityEnum {
  SB = "SB",
  Skiing = "SK",
  Rock_Climbing = "RO",
  Motocross = "MO",
  Mountain_Biking = "MB",
  Road_Biking = "RB",
  BMX = "BM",
  Surfing = "SU",
  Skateboarding = "S8",
  Roller_Blading = "NO",
  Kayaking = "KA",
  Parkour = "PA",
  Scooter = "SC",
  Rafting = "SC",
}

export const activities: Array<string> = Object.keys(ActivityEnum).map(
  (activity: string) => activity.replaceAll("_", " "),
);

export enum TrickTypeEnum {
  Urban = "UR",
  Jump = "JU",
  Park = "PA",
  Backcountry = "BA",
  Miscellaneous = "MI",
}

export const trickTypes: Array<string> = Object.keys(TrickTypeEnum).map(
  (trickType: string) => trickType.replaceAll("_", " "),
);
