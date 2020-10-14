export enum AsinStateEnum {
  Loading = 1,
  Loaded = 2,
  Error = 3,
}

export const EnumLabels = {
  AsinState: {
    [AsinStateEnum.Error]: "❌ Erreur de chargement",
    [AsinStateEnum.Loaded]: "✅ succès",
    [AsinStateEnum.Loading]: "🕔 Chargement en cours",
  },
};
