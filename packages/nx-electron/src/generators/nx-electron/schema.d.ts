import { Linter } from '@nrwl/linter';

export interface Schema {
  name: string;
  frontendProject: string | string[];
  addProxy: boolean;
  proxyPort: number;
  skipProxy?: boolean;
  skipFormat: boolean;
  skipPackageJson: boolean;
  directory?: string;
  unitTestRunner: 'jest' | 'none';
  linter: Linter;
  tags?: string;
  setParserOptionsProject?: boolean;
  standaloneConfig?: boolean;
}
