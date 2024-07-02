
type modeTypes = 'dev' | 'prod' | 'stage';

export interface IEnvironment {
  production: boolean;
  environmentMode: modeTypes,
  apiV1: string;
}
