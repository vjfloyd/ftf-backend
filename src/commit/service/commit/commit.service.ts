import { Injectable } from '@nestjs/common';
import { CommitResponse } from 'src/commit/dto/commit.response/commit.response';
import { Octokit } from 'octokit';

@Injectable()
export class CommitService {
  async getAllCommits(): Promise<CommitResponse[]> {
    const octokit = new Octokit({
      auth: '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',
    });
    const { data } = await octokit.request(
      'GET /repos/vjfloyd/ftf-backend/commits',
      {
        owner: 'vjfloyd',
        repo: 'ftf-backend',
        per_page: 10,
        sort: 'updated',
        direction: 'asc',
      },
    );
    console.log(data);
    return data.map((item: any) => {
      const commit = new CommitResponse();
      const { message } = item.commit;
      const { name, email, date } = item.commit.author;
      commit.id = item.sha;
      commit.message = message;
      commit.author = name;
      commit.date = date;
      commit.email = email;
      return commit;
    });
  }
}
