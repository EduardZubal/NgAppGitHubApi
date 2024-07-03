
type ModeTypes = 'dev' | 'prod' | 'stage';

export interface IEnvironment {
  production: boolean;
  environmentMode: ModeTypes,
  apiV1: string;
}
