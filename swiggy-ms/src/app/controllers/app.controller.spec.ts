import { Test } from '@nestjs/testing';
import { expect } from 'chai';

import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).to.equal('Hello World!');
    });
  });

  describe('health', () => {
    it('should return "Health OK!"', () => {
      expect(appController.getHealth()).to.equal('Health OK!');
    });
  });
});
